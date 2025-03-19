import { LANG_MAP } from "@/constants";
import { Flex, Form, Input } from "antd";
import { FC } from "react";

type Props = {
	name: string;
	label: string;
};

export const FormInputGroup: FC<Props> = ({ label, name }) => {
	return (
		<Flex gap={"small"}>
			{LANG_MAP.map((lang) => (
				<Form.Item key={lang} label={`${label} ${lang}`} name={`${name}_${lang}`} rules={[{ required: true }]}>
					<Input />
				</Form.Item>
			))}
		</Flex>
	);
};
