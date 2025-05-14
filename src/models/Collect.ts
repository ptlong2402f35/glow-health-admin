import IModel from "./IModel";
import Staff from "./Staff";

export enum CollectType {
    Nodata= 0,
	Punish = 1,
	Return  = 2,
    BannerRental = 3,
	SpaMaintenance = 4,
    SpaKTVExtra = 5,
	Discount = 10,
    GlowIncome= 99,
}

export const CollectTypeMap = new Map([
	[CollectType.Nodata, "Không data"],
	[CollectType.Punish, "Phạt KTV"],
    [CollectType.Return, "Phí Đơn trả về glow"],
    [CollectType.BannerRental, "Phí thuê banner"],
    [CollectType.SpaMaintenance, "Phí duy trì spa"],
    [CollectType.SpaKTVExtra, "Phí thêm KTV của spa"],
    [CollectType.Discount, "Chiết khấu"],
    [CollectType.Discount, "Thu nhập Glow"],
]);

export default class Collect implements IModel<Collect> {
    id?: number | null;
    type?: number | null;
    staffId?: number | null;
    userId?: number | null;
    date?: Date | null;
    totalMoney?: number | null | undefined;
    transactionIds?: number[] | null | undefined;
    description?: string | null;
    transactionData?: TransactionData[] | null;
    staff?: Staff | null;
    totalCommissionMoney?: number | null;
    deductionCommissionMoney?: number | null;
   
    constructor(input?: Partial<Collect>) {
        this.id = input?.id;
        this.type = input?.type;
        this.staffId = input?.staffId;
        this.userId = input?.userId;
        this.date = input?.date;
        this.totalMoney = input?.totalMoney;
        this.transactionIds = input?.transactionIds;
        this.description = input?.description;
        this.transactionData = input?.transactionData;
        this.staff = input?.staff;
        this.totalCommissionMoney = input?.totalCommissionMoney;
        this.deductionCommissionMoney = input?.deductionCommissionMoney;
    }

    parse(json?: any): Collect {
        if (!json) return this;

        Object.assign(this, {
            ...json,
        });

        return this;
    }

    parseList(jsons: any) {
        if (!jsons || !jsons.length) return;

        return jsons.map((item: any) => new Collect().parse(item));
    }

    clone(): Collect {
        return new Collect({
            ...this,
        });
    }
}



export class TransactionData {
    id?: number | null | undefined;
    type?: number | null | undefined;
    money?: number | null | undefined;
    incomeCalculated?: boolean | false;

    constructor(input?: Partial<TransactionData>) {
        this.id = input?.id;
        this.type = input?.type;
        this.money = input?.money;
        this.incomeCalculated = input?.incomeCalculated;
    }

    parse(json?: any): TransactionData {
        if (!json) return this;

        Object.assign(this, {
            ...json,
        });

        return this;
    }

    parseList(jsons: any) {
        if (!jsons || !jsons.length) return;

        return jsons.map((item: any) => new TransactionData().parse(item));
    }

    clone(): TransactionData {
        return new TransactionData({
            ...this,
        });
    }
}