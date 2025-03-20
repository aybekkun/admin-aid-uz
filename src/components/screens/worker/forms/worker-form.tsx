import { FormImageItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TWorkerForm,
	useCreateWorkerMutation,
	useGetByIdWorkerQuery,
	useUpdateWorkerMutation,
} from "@/services/worker";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const WorkerForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TWorkerForm>();
	const { data, isLoading } = useGetByIdWorkerQuery(id);
	const navigate = useNavigate();
	const { mutate: createWorker, isPending: isCreating } = useCreateWorkerMutation();
	const { mutate: updateWorker, isPending: isUpdating } = useUpdateWorkerMutation();
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
	const onFinish: FormProps<TWorkerForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createWorker(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/worker/list", replace: true });
				},
			});
		} else {
			await updateWorker(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/worker/list", replace: true });
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
