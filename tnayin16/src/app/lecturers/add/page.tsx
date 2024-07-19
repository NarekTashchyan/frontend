import { handleAdd } from "@/app/lib/actions/lecturer-actions";

export default function Page(){
    return <div>
        <h1 className="is-size-5">Add Course</h1>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box" action={handleAdd}>
                    <div className="field my-4">
                        <input 
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
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
                    <div className="field my-4">
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}