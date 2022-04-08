import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {useHistory} from "react-router-dom";


function RedirectPage() {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    history.push(`/restaurant/${id}/overview`);
  });

  return <div></div>;
}

export default RedirectPage;