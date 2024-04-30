import {Service} from "../../domain/bean/Service.ts";

export default class LinkDTO {

	private id: string;
	private service: Service;
	private url: string;
	private linkName: string;
	private username: string;

	constructor(id: string, service: Service, url: string, linkName: string, userName: string) {
		this.id = id;
		this.service = service;
		this.url = url;
		this.linkName = linkName;
		this.username = userName;
	}

	public get getId() {
		return this.id;
	}

	public get getService() {
		return this.service;
	}

	public get getUrl() {
		return this.url;
	}

	public get getLinkName() {
		return this.linkName;
	}

	public get getUsername() {
		return this.username;
	}

	public equals(LinkDTO: LinkDTO): boolean {
		return this.id === LinkDTO.id;
	}

}