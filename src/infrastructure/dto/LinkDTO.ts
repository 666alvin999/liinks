import {Service} from "../../domain/beans/Service.ts";

export type LinkDTO = {
	service: Service;
	url: string;
	linkName: string;
	userName: string;
}