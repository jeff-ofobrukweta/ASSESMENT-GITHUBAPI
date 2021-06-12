import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVELOPERS } from "../../routes/constant";
import "./dropdown.css";
const Dropdown = (props: any) => {
  const [filteredArray, setfilteredArray] = useState(props.data);

  const [is_dialogue_open, setIs_dialogue_open] = useState(false);

  useEffect(() => {
    setfilteredArray(props.data);
  }, [props.data]);
  





  // handles the search input operation on dropdown
  const handleInput = (e: any) => {
    if (props?.flag === null || props?.flag === undefined) {
      const filter = props.data.filter((element: string) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setfilteredArray(filter);
      return;
    }

    const filter = props?.data.filter((element: any) =>
      element.name.toLowerCase().includes(e.target?.value.toLowerCase())
    );
    setfilteredArray(filter);
  };
  return (
    <>
      <details className="details-option" open={is_dialogue_open}>
        <summary className=" btn-link" role="button">
          <span className="txt-inner-opt">{props.headerText || "Any"}:</span>
          <span className="text-bold">{props.boldText}</span>
        </summary>
        <section className="option-select-dropdown">
          <div className="option-select-header">{props.searchTitle}</div>
          {props.withInput && (
            <div className="option-select-item-search">
              <input
                type="text"
                onInput={handleInput}
                placeholder={props.inputPlaceholder}
                className="search-drop-down"
              />
            </div>
          )}
          <div className="select-menu-list" onClick={()=>
            setIs_dialogue_open(()=>!is_dialogue_open)
            }>
            {filteredArray?.length ? (
              filteredArray.map((item: any, index: any) => {
                return (
                  <Link
                    to={`${
                      props.flag?.length > 2
                        ? `?${
                            props?.time.includes("Any") || !props?.time
                              ? ""
                              : `since=${props.time}`
                          }&spoken_language_code=${item.urlParam}`
                        : props.type === "date"
                        ? `?${
                            !props.spokenLang ||
                            props.spokenLang.includes("Any")
                              ? ""
                              : `spoken_language_code=${props.spokenLang}`
                          }&since=${item}`
                        : props?.type.includes("pro-lang")
                        ? `${
                            props.path.includes(DEVELOPERS)
                              ? `/developers${
                                  !props.proLang ||
                                  props.proLang.includes("Any")
                                    ? ""
                                    : `/${item}`
                                }?${
                                  !props.time || props.time.includes("Any")
                                    ? ""
                                    : `&since=${props.time}`
                                }${
                                  !props.spokenLang ||
                                  props.spokenLang.includes("Any")
                                    ? ""
                                    : `&spoken_language_code=${props.spokenLang}`
                                }`
                              : `/${item}?${
                                  !props.time || props.time.includes("Any")
                                    ? ""
                                    : `&since=${props.time}`
                                }${
                                  !props.spokenLang ||
                                  props.spokenLang.includes("Any")
                                    ? ""
                                    : `&spoken_language_code=${props.spokenLang}`
                                }`
                          }`
                        : ""
                    }`}
                    key={index}
                    className="option-select-item"
                  >
                    {`${props.flag?.length > 2 ? item.name : item}`}
                  </Link>
                );
              })
            ) : (
              <>
                {/* for empty search not applicable */}
                <div className="warn-text">PLEASE NO ITEM AVAILABLE</div>
              </>
            )}
          </div>
        </section>
      </details>
    </>
  );
};

export default Dropdown;
