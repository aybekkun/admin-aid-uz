import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TSuccessForm,
	useCreateSuccessMutation,
	useGetByIdSuccessQuery,
	useUpdateSuccessMutation,
} from "@/services/success";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const SuccessForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TSuccessForm>();
	const { data, isLoading } = useGetByIdSuccessQuery(id);
	const navigate = useNavigate();
	const { mutate: createSuccess, isPending: isCreating } = useCreateSuccessMutation();
	const { mutate: updateSuccess, isPending: isUpdating } = useUpdateSuccessMutation();
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
	const onFinish: FormProps<TSuccessForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createSuccess(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/success/list", replace: true });
				},
			});
		} else {
			await updateSuccess(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/success/list", replace: true });
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
			<FormInputGroup label="Название" name="description" />
		</Form>
	);
};
