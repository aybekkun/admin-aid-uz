import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TMembersForm,
	useCreateMembersMutation,
	useGetByIdMembersQuery,
	useUpdateMembersMutation,
} from "@/services/members";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const MembersForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TMembersForm>();
	const { data, isLoading } = useGetByIdMembersQuery(id);
	const navigate = useNavigate();
	const { mutate: createMembers, isPending: isCreating } = useCreateMembersMutation();
	const { mutate: updateMembers, isPending: isUpdating } = useUpdateMembersMutation();
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
	const onFinish: FormProps<TMembersForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createMembers(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/members/list", replace: true });
				},
			});
		} else {
			await updateMembers(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/members/list", replace: true });
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
