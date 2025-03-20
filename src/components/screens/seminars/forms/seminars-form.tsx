import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TSeminarsForm,
	useCreateSeminarsMutation,
	useGetByIdSeminarsQuery,
	useUpdateSeminarsMutation,
} from "@/services/seminars";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const SeminarsForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TSeminarsForm>();
	const { data, isLoading } = useGetByIdSeminarsQuery(id);
	const navigate = useNavigate();
	const { mutate: createSeminars, isPending: isCreating } = useCreateSeminarsMutation();
	const { mutate: updateSeminars, isPending: isUpdating } = useUpdateSeminarsMutation();
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
	const onFinish: FormProps<TSeminarsForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createSeminars(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/seminars/list", replace: true });
				},
			});
		} else {
			await updateSeminars(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/seminars/list", replace: true });
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
