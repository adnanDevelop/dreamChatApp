import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { contactContent } from "../content";

const Contact = () => {
  return (
    <main>
      {/* Search section */}
      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-light font-poppin">
            Contacts
          </h4>
          {/* Add Contacts button */}
          <button className="w-[25px] h-[25px] rounded-full bg-primary text-light text-sm flex items-center justify-center">
            <FaPlus />
          </button>
        </div>
        {/* Search Bar */}
        <div className="w-full h-[45px] rounded-md bg-black flex gap-1.5 mt-[20px]">
          <input
            type="text"
            className="w-full h-full bg-black focus:outline-none text-light px-2.5 text-sm rounded-tl-md rounded-bl-md"
            placeholder="Search Contacts"
          />
          <button className="w-[30px] h-full flex items-center justify-center text-light me-2">
            <FaSearch />
          </button>
        </div>
      </section>
      {/* Contacts section */}
      <section className="mt-[30px]">
        <h4 className="text-lg font-semibold text-light font-poppin">
          All Contacts
        </h4>

        <div className="mt-[15px]">
          {contactContent.map((element, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between w-full p-4 mb-3 bg-black border-2 border-transparent rounded-md transitions hover:border-primary"
              >
                {/* Avator section */}
                <div className="flex items-center gap-3 text-light">
                  <div className={`avatar ${element?.active ? "online" : ""}`}>
                    <div className="w-[50px] rounded-full">
                      <img src={element.image} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{element?.title}</h4>
                    <p className="text-xs text-content">{element?.lastSeen}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Contact;
