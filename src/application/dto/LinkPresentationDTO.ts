import {Service} from "../../domain/bean/Service.ts";
import * as url from "node:url";

export default class LinkPresentationDTO {

	private id: string;
	private url: string;
	private linkName: string;

	constructor(id: string, url: string, linkName: string) {
		this.id = id;
		this.url = url;
		this.linkName = linkName;
	}

	public get getId(): string {
		return this.id;
	}

	public get getUrl(): string {
		return this.url;
	}

	public get getLinkName(): string {
		return this.linkName;
	}
}