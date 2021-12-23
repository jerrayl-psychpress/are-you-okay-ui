import './App.css';

function App() {
    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <div>
                <h2>
                    Users
                </h2>
                <div>
                    Somethea: Busy
                </div>
                <div>
                    Kevin: Open to chat
                </div>
                <div>
                    Jerrayl: Stuck on bug
                </div>
            </div>
            <div>
                <form>
                    <input type={"text"} className={"text-red"}/>
                    <button className={""}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
