import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormEditorGroup } from "@/components/shared/forms/form-editor-group";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import { TNewsForm, useCreateNewsMutation, useGetByIdNewsQuery, useUpdateNewsMutation } from "@/services/news";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate, } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const NewsForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TNewsForm>();
	const { data, isLoading } = useGetByIdNewsQuery(id);
	const navigate = useNavigate();
	const { mutate: createNews, isPending: isCreating } = useCreateNewsMutation();
	const { mutate: updateNews, isPending: isUpdating } = useUpdateNewsMutation();
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
	const onFinish: FormProps<TNewsForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createNews(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/news/list", replace: true });
				},
			});
		} else {
			await updateNews(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/news/list", replace: true });
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
			<FormInputGroup label="Заголовок " name="title" />
			<FormInputGroup label="Описание " name="description" />
			<FormEditorGroup label="Контент" name="content" />
		</Form>
	);
};
