import { Flex, Space, Table, TableProps, Typography } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { TitleProps } from "antd/es/typography/Title";
import { ReactNode } from "react";
import useSize from "antd/es/config-provider/hooks/useSize";
interface Props<T> extends Omit<TableProps<T>, "title"> {
	title?: string;
	titleProps?: TitleProps;
	extra?: ReactNode;
}

export const DataTable = <T extends AnyObject>({ title, titleProps, extra, ...rest }: Props<T>) => {
	const size = useSize(rest.size);
	return (
		<Table<T>
			title={() => (
				<Flex gap={8} justify={title ? "space-between" : "end"}>
					{title && (
						<Typography.Title
							{...titleProps}
							style={{
								display: "inline-block",
								overflow: "hidden",
								whiteSpace: "nowrap",
								textWrap: "nowrap",
								textOverflow: "ellipsis",
							}}
							level={titleProps?.level || (size === "small" ? 5 : 4)}
						>
							{title}
						</Typography.Title>
					)}
					<Space>{extra}</Space>
				</Flex>
			)}
			scroll={{
				x: "auto",
			}}
			{...rest}
		/>
	);
};
