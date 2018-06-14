/**
 * @disc:uuid 生成
 * @author:yanxinaliang
 * @time：2018/6/14 14:07
 */
class Uuid{
    private static _id:number=0;
    public static get id(){
        return this._id++;
    }
}

export {Uuid};