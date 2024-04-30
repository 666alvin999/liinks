import Airtable from "airtable";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";
import LinkDTO from "../dto/LinkDTO.ts";
import {Service} from "../../domain/bean/Service.ts";

export default class LinkDao {

	private base: Airtable.Base = new Airtable({apiKey: `${import.meta.env.VITE_AIRTABLE_API_KEY}`}).base(`${import.meta.env.VITE_AIRTABLE_BASE_ID}`);

	public async create(link: LinkDTO): Promise<ActionSuccess> {
		const linkObject = {
			service: link.getService,
			linkName: link.getLinkName,
			url: link.getUrl,
			username: link.getUsername
		}

		try {
			await this.base('Links').create(linkObject);
			return new ActionSuccess(true);
		} catch (error) {
			return new ActionSuccess(false, "Une erreur est survenue lors de l'enregistrement");
		}
	}

	public async delete(linkId: string): Promise<ActionSuccess> {
		try {
			await this.base('Links').destroy(linkId);
			return new ActionSuccess(true);
		} catch (error) {
			return new ActionSuccess(false, "Une erreur est survenue lors de la suppression");
		}
	}

	public async update(link: LinkDTO): Promise<ActionSuccess> {
		try {
			const existingLink: LinkDTO = await this.getLinkById(link.getId);

			if (existingLink.equals(link)) {
				this.base('Links').update(link.getId, {
					linkName: link.getLinkName,
					username: link.getUsername,
					service: link.getService,
					url: link.getUrl
				});
				return new ActionSuccess(true);
			}

			return new ActionSuccess(false, "Le lien à modifier n'existe pas");
		} catch (error) {
			return new ActionSuccess(false, "Impossible de modifier le lien, veuillez réessayer");
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
				record.fields.username as string
			));
		} catch (error) {
			return new Array<LinkDTO>();
		}
	}

	private async getLinkById(linkId: string): Promise<LinkDTO> {
		const record = await this.base('Links').find(linkId);

		return new LinkDTO(
			record.id,
			record.fields.service as Service,
			record.fields.url as string,
			record.fields.linkName as string,
			record.fields.username as string
		);
	}
}