class Link {

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

}