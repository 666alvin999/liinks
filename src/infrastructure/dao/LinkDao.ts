import Airtable from "airtable";
import ActionSuccess from "../../domain/beans/ActionSuccess.ts";
import {LinkDTO} from "../dto/LinkDTO.ts";

export default class LinkDao {

	private base: Airtable.Base = new Airtable({ apiKey: `${import.meta.env.VITE_AIRTABLE_API_KEY}` }).base(`${import.meta.env.VITE_AIRTABLE_BASE_ID}`);

	public async create(link: LinkDTO): Promise<ActionSuccess> {
		try {
			await this.base('User').create(link);
			return new ActionSuccess(true);
		} catch (error) {
			console.log(error);
			return new ActionSuccess(false, "Une erreur est survenue lors de l'enregistrement");
		}
	}

}