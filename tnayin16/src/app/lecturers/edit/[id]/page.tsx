import { handleEdit } from "@/app/lib/actions/lecturer-actions"
interface IProps{
    params: {id:number}
}
export default function Page({params}:IProps){
    return <>
        <p className="is-size-1">Edit Course No. {params.id}</p>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleEdit}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter name"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="email"
                            placeholder="enter email"
                        />
                    </div>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="phone"
                            placeholder="enter phone"
                        />
                    </div>
                    <input name="id" type="hidden" defaultValue={params.id}/>
                    <div className="field my-4">
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}