import React from "react";
import NoData from "../noData";

const Actions = () => {
    return <>
        <img
            className="actions"
            src="/images/actions/edit.png"
            alt="edit"
            loading="lazy"
        />
        <img
            className="actions"
            src="/images/actions/delete.png"
            alt="delete"
            loading="lazy"
        />
        <img
            className="actions"
            src="/images/actions/view.png"
            alt="view"
            loading="lazy"
        />
    </>
}

const BeneficiaryTable = ({ columns, data }) => {
    return <>
        <div className="table_wrap">
            {
                (data && data.length)
                    ? <table className="beneficiary_table">
                        <thead>
                            <tr>
                                {
                                    columns.map(c => {
                                        return <>
                                            <th>{c.head_title}</th>
                                        </>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(d => {
                                    return <tr>
                                        {
                                            columns.map(c => {
                                                if (c.showActions) {
                                                    return <>
                                                        <td><Actions /></td>
                                                    </>
                                                } else if (c.key_name) {
                                                    return <>
                                                        <td>{d[c.key_name]}</td>
                                                    </>
                                                } else {
                                                    return "-";
                                                }
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    : <NoData message={"No Beneficiary Available"} />
            }
        </div>
    </>
}

export default BeneficiaryTable;