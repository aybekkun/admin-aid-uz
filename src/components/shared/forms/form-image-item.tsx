import { InboxOutlined } from "@ant-design/icons";
import { Form } from "antd";

import Upload, { UploadChangeParam, UploadFile } from "antd/es/upload";


export const FormImageItem = () => {
	return (
		<Form.Item
			name={"image"}
			label="Файл"
			rules={[{ required: true }]}
			valuePropName={"fileList"}
			getValueFromEvent={(e: UploadChangeParam<UploadFile>) => {
				if (Array.isArray(e)) {
					return e;
				}
				return e?.fileList;
			}}
		>
			<Upload.Dragger maxCount={1} accept={"image/*"} beforeUpload={() => false} listType={"picture"}>
				{/*<button style={{ border: 0, background: "none" }} type={"button"}>*/}
				{/*	<PlusOutlined />*/}
				{/*	<div style={{ marginTop: 8 }}>Upload</div>*/}
				{/*</button>*/}
				<p className={"ant-upload-drag-icon"}>
					<InboxOutlined />
				</p>
				<p className={"ant-upload-text"}>Нажмите или перетащите файл в эту область для загрузки</p>
			</Upload.Dragger>
		</Form.Item>
	);
};
