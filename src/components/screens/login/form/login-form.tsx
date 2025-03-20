import { FORM_DEFAULT, INPUT_PLACEHOLDER } from "@/constants";

import { TAuthLogin, TAuthResponse, useAuthLoginMutation } from "@/services/auth";
import { useAuthStore } from "@/store/use-auth-store";
import { formatPhoneReverse } from "@/utils";

import { Button, Card, Form, FormProps, Input, Typography } from "antd";
import { FC, useEffect } from "react";
import { PatternFormat } from "react-number-format";
export const LoginForm: FC = () => {
	const { setUser, user } = useAuthStore();
	const router = useRouter();
	const [form] = Form.useForm<TAuthLogin>();
	const { mutate: login, isPending, isSuccess } = useAuthLoginMutation();
	const onFinish: FormProps<TAuthLogin>["onFinish"] = (values) => {
		if (values.phone) {
			values.phone = formatPhoneReverse(values.phone);
		}
		login(values, {
			onSuccess: (data: TAuthResponse) => {
				// form.resetFields();
				setUser(data.data);
			},
		});
	};
	useEffect(() => {
		if (user && isSuccess) {
			router.invalidate();
		}
	}, [user, isSuccess, router]);

	return (
		<Card style={{ width: "100%", maxWidth: 400 }}>
			<Typography.Title level={3}>Логин</Typography.Title>
			<Form form={form} {...FORM_DEFAULT} onFinish={onFinish}>
				<Form.Item label="Телефон" name={"phone"} rules={[{ required: true }]}>
					<PatternFormat placeholder={INPUT_PLACEHOLDER} format={"+998 ## ### ## ##"} customInput={Input} />
				</Form.Item>
				<Form.Item label="Пароль" name={"password"} rules={[{ required: true }]}>
					<Input.Password placeholder={INPUT_PLACEHOLDER} />
				</Form.Item>
				<Form.Item>
					<Button type={"primary"} htmlType={"submit"} block={true} disabled={isPending}>
						Войти
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};
