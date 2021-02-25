import React from 'react'

export const ClientIndex = ()=>{
    return <div className="content-body">
    <div className="container page">
      <div className="row">
        <div className="col-md-6">
      <h2>고객관리</h2>
      <center>
      <a href='#' id="client-list">고객정보 보기</a><br/>
      <a href='#' id="client-insert">고객정보 입력</a>
      </center>
        </div>
      </div>
    </div>
    <div className="element-section pattern bg-gray-3 relative pt-60 pb-100">
      <div className="container">
        <h4 className="title-section mb-20"><span className="font-bold">Contact us</span></h4>
        <div className="widget-contact-form pb-0">
          <div className="email_server_responce"></div>
          <form action="php/contacts-process.php" method="post" className="form contact-form alt clearfix">
            <div className="row">
              <div className="col-md-6 clearfix">
                <div className="input-container">
                  <input type="text" name="name" value="" size="40" placeholder="Name" aria-invalid="false" aria-required="true" className="form-row form-row-first"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" name="email" value="" size="40" placeholder="Email" aria-required="true" className="form-row form-row-last"/>
                </div>
              </div>
            </div>
            <div className="input-container">
              <textarea name="message" cols="40" rows="4" placeholder="Comment" aria-invalid="false" aria-required="true"></textarea>
            </div>
            <input type="submit" value="Submit now" className="cws-button alt"/>
          </form>
        </div>
      </div>
    </div>
  </div>
}