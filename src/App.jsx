import Customer from "./Customer";
import Manager from "./Manager";
import { NoticeBoard } from "./NoticeBoard";
import Parent from "./Parent";
import './App.css'
import Backend from "./backend";
function App() {
  // let msg="Hello"
  return (
    <>
    <Backend/>


      {/* <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h2>Page not found</h2>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes> */}
      {/* <NoticeBoard.Provider value={msg}>
        <Parent/>
      </NoticeBoard.Provider> */}
      {/* <Customer/> */}
      {/* <Manager/> */}
    </>
  );
}
export default App