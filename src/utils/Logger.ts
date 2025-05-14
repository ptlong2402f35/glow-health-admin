import environments from "../environment";

export default class Logger {
	entityName: string;

	constructor(entityName: string) {
		this.entityName = entityName;
	}

	static getLogger(entityName: string) {
		return new Logger(entityName);
	}

	direct(...args: any[]) {
		try {
			let prefix = `[${new Date().toLocaleString()}]`;
			if (this.entityName) {
				prefix += `[${this.entityName}]`;
			}

			if (args && args.length > 0 && typeof args[0] === "string") {
				let restArgs = args.slice(1);
				console.log(prefix + " " + args[0], ...restArgs);
			} else {
				console.log(prefix + " ", ...args);
			}
		} catch (err) {
			console.error(err);
		}
	}

	log(...args: any[]) {
		if (!environments.logMode) return;

		this.direct(...args);
	}
}
