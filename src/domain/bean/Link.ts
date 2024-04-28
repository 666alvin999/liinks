import {Service} from "./Service.ts";

export default class Link {

	private id: string;
	private service: Service;
	private linkName: string;
	private socialMediaUserName: string | null;
	private url: string | null;

	constructor(id: string, service: Service, linkName: string, username: string | null, url: string | null) {
		this.id = id;
		this.service = service;
		this.linkName = linkName;
		this.socialMediaUserName = username;
		this.url = url;
	}

	public get getId(): string {
		return this.id;
	}

	public get getService(): Service {
		return this.service;
	}

	public get getLinkName(): string {
		return this.linkName;
	}

	public get getSocialMediaUserName(): string | null {
		return this.socialMediaUserName;
	}

	public get getUrl(): string | null {
		return this.url;
	}

}