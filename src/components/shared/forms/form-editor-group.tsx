import { Form } from "antd";
import { FC, } from "react";
import { TinyEditor } from "../tiny-editor";
import { LANG_MAP } from "@/constants";

type Props = {
	name: string;
	label: string;

};

export const FormEditorGroup: FC<Props> = ({ label, name }) => {
	return (
		<>
			{LANG_MAP.map((lang) => (
				<Form.Item
					label={`${label} ${lang}`}
					name={`${name}_${lang}`}
					key={lang}
					valuePropName="value"
					rules={[{ required: true }]}
					getValueFromEvent={(value) => value}
				>
					<TinyEditor />
				</Form.Item>
			))}
		</>
	);
};
