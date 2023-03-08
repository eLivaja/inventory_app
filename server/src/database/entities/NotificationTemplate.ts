import { Entity, Enum, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';

const type = {
	ITEM_STATUS_CHANGE: 'item_status_change',
	ITEM_REQUEST: 'item_request',
} as const;

export type Type = (typeof type)[keyof typeof type];

@Entity()
class NotificationTemplate extends BaseEntity {
	@Property()
	title: string;

	@Property()
	content: string;

	@Enum()
	type: Type;

	constructor(title: string, content: string, type: Type) {
		super();
		this.title = title;
		this.content = content;
		this.type = type;
	}
}

export default NotificationTemplate;
