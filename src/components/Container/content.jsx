import React, { useContext } from "react";
import IdolList from "./IdolList";
import { IdolContext } from "../ContextApi/IdolContext";

function Content() {
  const { idolList, setIdolList } = useContext(IdolContext);

  return idolList.map((idol) => (
    <IdolList
      key={idol._id}
      id={idol._id}
      title={idol.title}
      thumbnail={idol.thumbnail.image_url}
      price={idol.price}
    />
  ));
}

export default Content;