import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TStudyForm,
	useCreateStudyMutation,
	useGetByIdStudyQuery,
	useUpdateStudyMutation,
} from "@/services/study";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const StudyForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TStudyForm>();
	const { data, isLoading } = useGetByIdStudyQuery(id);
	const navigate = useNavigate();
	const { mutate: createStudy, isPending: isCreating } = useCreateStudyMutation();
	const { mutate: updateStudy, isPending: isUpdating } = useUpdateStudyMutation();
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
	const onFinish: FormProps<TStudyForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createStudy(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/study/list", replace: true });
				},
			});
		} else {
			await updateStudy(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/study/list", replace: true });
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
