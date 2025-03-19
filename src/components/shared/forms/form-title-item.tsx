import { Form, Input } from "antd";
import { FC } from "react";

type Props = {
	lang: "ru" | "uz" | "kaa" | "en";
};

export const FormTitleItem: FC<Props> = ({ lang = "ru" }) => {
	return (
		<Form.Item layout="vertical" label={"Заголовок " + lang} name={"title_" + lang} rules={[{ required: true }]}>
			<Input />
		</Form.Item>
	);
};
