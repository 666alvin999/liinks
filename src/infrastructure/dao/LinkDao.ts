import Airtable from "airtable";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";
import LinkDTO from "../dto/LinkDTO.ts";
import {Service} from "../../domain/bean/Service.ts";

type Record = {
	id: string,
	fields: {
		service: Service,
		linkName: string,
		url: string,
		userName: string
	}
};

export default class LinkDao {

	private base: Airtable.Base = new Airtable({apiKey: `${import.meta.env.VITE_AIRTABLE_API_KEY}`}).base(`${import.meta.env.VITE_AIRTABLE_BASE_ID}`);

	public async create(link: LinkDTO): Promise<ActionSuccess> {
		const linkObject = {
			id: link.getId,
			service: link.getService,
			linkName: link.getLinkName,
			url: link.getUrl,
			username: link.getUsername
		}

		try {
			await this.base('User').create(linkObject);
			return new ActionSuccess(true);
		} catch (error) {
			console.log(error);
			return new ActionSuccess(false, "Une erreur est survenue lors de l'enregistrement");
		}
	}

	public async getAllLinksByUsername(username: string): Promise<Array<LinkDTO>> {
		const options: RequestInit = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
			}
		}

		const rs = await fetch("https://api.airtable.com/v0/appGwyvBOAneHNtCV/User/", options);
		const data = await rs.json();

		return data.records
			.filter((record: Record) => record.fields.userName === username)
			.map((record: Record): LinkDTO => {
				return new LinkDTO(
					record.id,
					record.fields.service,
					record.fields.linkName,
					record.fields.url,
					record.fields.userName
				);
			});
	}
}