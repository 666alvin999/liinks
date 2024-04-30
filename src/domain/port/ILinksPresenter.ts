import Link from "../bean/Link.ts";
import User from "../bean/User.ts";

export default interface ILinksPresenter<T> {

	presentAll(links: Array<Link>, user: User | null): T;

}