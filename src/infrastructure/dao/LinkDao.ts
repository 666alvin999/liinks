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
			await this.base('Links').create(linkObject);
			return new ActionSuccess(true);
		} catch (error) {
			console.log(error);
			return new ActionSuccess(false, "Une erreur est survenue lors de l'enregistrement");
		}
	}

	public async getAllLinksByUsername(username: string): Promise<Array<LinkDTO>> {
		try {
			const records = await this.base('Links').select({
				filterByFormula: `({userName} = '${username}')`
			}).all();

			return records.map((record) => new LinkDTO(
				record.id,
				record.fields.service as Service,
				record.fields.url as string,
				record.fields.linkName as string,
				record.fields.userName as string
			));
		} catch (error) {
			console.log(error);
			return new Array<LinkDTO>();
		}
	}
}