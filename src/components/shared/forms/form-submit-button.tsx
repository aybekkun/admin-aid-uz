import { useRouter } from "@tanstack/react-router";
import { Button, Flex, Form } from "antd";
import { FC } from "react";

interface Props {
	// form: FormInstance;
	isLoading: boolean;
}

export const FormSubmitButton: FC<Props> = ({ isLoading }) => {
	const router = useRouter();
	const onCloseDrawer = () => {
		router.history.back();
	};
	return (
		<Flex justify={"end"} gap={"small"}>
			<Button danger={true} onClick={onCloseDrawer}>
				Отмена
			</Button>
			<Form.Item label={null}>
				<Button htmlType="submit" loading={isLoading}>
					Сохранить
				</Button>
			</Form.Item>
		</Flex>
	);
};
