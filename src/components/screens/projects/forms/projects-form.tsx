import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TProjectsForm,
	useCreateProjectsMutation,
	useGetByIdProjectsQuery,
	useUpdateProjectsMutation,
} from "@/services/projects";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const ProjectsForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TProjectsForm>();
	const { data, isLoading } = useGetByIdProjectsQuery(id);
	const navigate = useNavigate();
	const { mutate: createProjects, isPending: isCreating } = useCreateProjectsMutation();
	const { mutate: updateProjects, isPending: isUpdating } = useUpdateProjectsMutation();
	useEffect(() => {
		if (data) {
			const transformed = transformWithLang(data.data);

			form.setFieldsValue({
				...transformed,
				image: [
					{
						uid: "-1",
						name: "file",
						status: "done",
						url: transformed.image,
					},
				],
			});
		}
	}, [id, data]);
	const onFinish: FormProps<TProjectsForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createProjects(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/projects/list", replace: true });
				},
			});
		} else {
			await updateProjects(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/projects/list", replace: true });
					},
				}
			);
		}
	};

	if (isLoading) {
		return <Spin />;
	}
	return (
		<Form layout="vertical" form={form} onFinish={onFinish}>
			<FormSubmitButton isLoading={isCreating || isUpdating} />
			<FormImageItem />
			<FormInputGroup label="Название" name="name" />
			<FormInputGroup label="Описание" name="description" />
		</Form>
	);
};
