import React from "react";
import SubjectLine from "./SubjectLine";

const TableComponent=()=>{
    return (
        <>
            <div className="mcm_subjects_mid_term_past_papers">
            <span className="title">all mcm subjects mid term past papers</span>
            <SubjectLine
              title={`all mcm subjects mid term past papers`}
              className="black_subject_line_text"
            />
            <table>
              <thead>
                <tr>
                  <td>File Name</td>
                  <td >Download Link</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="fa fa-file-word-o" aria-hidden="true"></i>all
                    mcm subjects mid term past papers.zip
                  </td>
                  <td ><sapn className="button">Download</sapn></td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
    )
}

export default TableComponent