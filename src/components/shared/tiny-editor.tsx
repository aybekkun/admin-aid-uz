import { FC} from "react";

import { Editor } from "@tinymce/tinymce-react";
interface Props {
	value?: string;
	onChange?: (value: string) => void;
}

export const TinyEditor: FC<Props> = ({ value = "", onChange = () => {} }) => {
	return (
		<div>
			<Editor
				apiKey="eh8wgq4xuhq8esb5tcc101hxnuxbcaxl0r142dk2tvytfe6a"
				value={value}
				// @ts-ignore
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				onEditorChange={(newValue, editor) => onChange(newValue)}
				init={{
					height: 500,
					menubar: true,
					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"image",
						"charmap",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"help",
						"wordcount",
					],
					toolbar:
						"undo redo | blocks | " +
						" media " +
						"bold italic backcolor | alignleft aligncenter " +
						"alignright alignjustify | bullist numlist outdent indent | " +
						"removeformat | help",
					content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
				}}
			/>
		</div>
	);
};
