export default class Link {

	private service: Service;
	private linkName: string;
	private username: string | null;
	private url: string | null;

	constructor(service: Service, linkName: string, username: string | null, url: string | null) {
		this.service = service;
		this.linkName = linkName;
		this.username = username;
		this.url = url;
	}

	public get getService(): Service {
		return this.service;
	}

	public get getLinkName(): string {
		return this.linkName;
	}

	public get getUsername(): string | null {
		return this.username;
	}

	public get getUrl(): string | null {
		return this.url;
	}

}