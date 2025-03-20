import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TCouncilForm,
	useCreateCouncilMutation,
	useGetByIdCouncilQuery,
	useUpdateCouncilMutation,
} from "@/services/council";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const CouncilForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TCouncilForm>();
	const { data, isLoading } = useGetByIdCouncilQuery(id);
	const navigate = useNavigate();
	const { mutate: createCouncil, isPending: isCreating } = useCreateCouncilMutation();
	const { mutate: updateCouncil, isPending: isUpdating } = useUpdateCouncilMutation();
	useEffect(() => {
		if (data) {
			const transformed = transformWithLang(data.data);
			form.setFieldsValue({
				...transformed,
				image: [
					{
						uid: "-1",
						name: "image",
						status: "done",
						url: transformed.image,
					},
				],
			});
		}
	}, [id, data]);
	const onFinish: FormProps<TCouncilForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createCouncil(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/council/list", replace: true });
				},
			});
		} else {
			await updateCouncil(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/council/list", replace: true });
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
			<FormInputGroup label="ФИО " name="full_name" />
			<FormInputGroup label="Должность " name="position" />
			<FormInputGroup label="Описание " name="description" />
		</Form>
	);
};
