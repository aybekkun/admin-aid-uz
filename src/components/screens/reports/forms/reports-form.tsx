import { FormFileItem, FormSubmitButton } from "@/components/shared";
import { FormInputGroup } from "@/components/shared/forms/form-input-group.tsx";
import {
	TReportsForm,
	useCreateReportsMutation,
	useGetByIdReportsQuery,
	useUpdateReportsMutation,
} from "@/services/reports";
import { transformToFormData, transformWithLang } from "@/utils";
import { useNavigate } from "@tanstack/react-router";
import { Form, FormProps, Spin } from "antd";
import { FC, useEffect } from "react";

interface Props {
	id?: number;
}

export const ReportsForm: FC<Props> = ({ id }) => {
	const [form] = Form.useForm<TReportsForm>();
	const { data, isLoading } = useGetByIdReportsQuery(id);
	const navigate = useNavigate();
	const { mutate: createReports, isPending: isCreating } = useCreateReportsMutation();
	const { mutate: updateReports, isPending: isUpdating } = useUpdateReportsMutation();
	useEffect(() => {
		if (data) {
			const transformed = transformWithLang(data.data);

			form.setFieldsValue({
				...transformed,
				file: [
					{
						uid: "-1",
						name: "file",
						status: "done",
						url: transformed.file,
					},
				],
			});
		}
	}, [id, data]);
	const onFinish: FormProps<TReportsForm>["onFinish"] = async (values) => {
		const formData = transformToFormData(values);

		if (!id) {
			await createReports(formData, {
				onSuccess: () => {
					form.resetFields();
					navigate({ to: "/reports/list", replace: true });
				},
			});
		} else {
			await updateReports(
				{ id, form: formData },
				{
					onSuccess: () => {
						form.resetFields();
						navigate({ to: "/reports/list", replace: true });
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
			<FormFileItem />
			<FormInputGroup label="Название" name="name" />
		</Form>
	);
};
