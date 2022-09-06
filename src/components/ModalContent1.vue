<template>
  <div class="container">
    <div class="row p-5">
      <div class="hold-2">
        <h2 class="p-2">BUYER-CONTRACT TO CLOSE</h2>
      </div>
      <div class="col-md-5">
        <ul>
          <li>Verify MLS commission/year built, MLS#</li>
          <li>Check documents for compliance and errors</li>
          <li>Set up file folder in Google Drive</li>
          <li>Request loan commitment letter, if applicable</li>
          <li>Intro Email to Title</li>
          <li>Intro Email to Lender</li>
          <li>Intro Email to Listing agent</li>
          <li>Intro Email to Buyer with copies of signed documents</li>
          <li>
            Enter transaction in broker’s management system and upload documents
          </li>
          <li>
            Request earnest money and receipt from title, builder or agent
          </li>
          <li>Email e.m. receipt to buyer, listing agent and lender</li>
          <li>Upload e.m. check/receipt to transaction management system</li>
          <li>RE10 reminder to agent one day before due date</li>
          <li>RE10 received and note repairs and credits</li>
          <li>
            Send RE10 to lender and title if there is a credit or change in sale
            price
          </li>
          <li>Upload RE10 to transaction management system</li>
        </ul>
      </div>
      <div class="col-md-5">
        <ul>
          <li>Follow up on any outstanding addendums</li>
          <li>
            Prelim reviewed and sent to buyer for review (2 nd set of eyes)
          </li>
          <li>Appraisal received</li>
          <li>Inquire about status of repairs and receipts</li>
          <li>Check broker file for compliance</li>
          <li>Send utility info to buyer one week in advance</li>
          <li>Send funder instructions for agents and my deposit info</li>
          <li>DA received and reviewed for accuracy</li>
          <li>
            Obtain and review settlement statement for accuracy (2 nd set of
            eyes)
          </li>
          <li>
            Upload final, signed buyer/seller closing statements to transaction
            management system
          </li>
          <li>Upload commission checks to transaction management system</li>
          <li>
            Move property folder to closed contracts in Google Drive and archive
            for 1 year
          </li>
          <li>Change status to closed in OTC</li>
        </ul>
      </div>
      <div class="col-2 holderr">
        <div class="hold">
          <h2 class="modal-section-picker">SELLER-CONTRACT TO CLOSE</h2>
          <h2 class="modal-section-picker-2">BUYER-CONTRACT TO CLOSE</h2>
          <div class="row other-text">
            <div class="col-md-5">
              <ul>
                <li>Verify MLS commission/year built, MLS#</li>
                <li>Check documents for compliance and errors</li>
                <li>Set up file folder in Google Drive</li>
                <li>Request loan commitment letter, if applicable</li>
                <li>Intro Email to Title</li>
                <li>Intro Email to Lender</li>
                <li>Intro Email to Listing agent</li>
                <li>Intro Email to Buyer with copies of signed documents</li>
                <li>
                  Enter transaction in broker’s management system and upload
                  documents
                </li>
                <li>
                  Request earnest money and receipt from title, builder or agent
                </li>
                <li>Email e.m. receipt to buyer, listing agent and lender</li>
                <li>
                  Upload e.m. check/receipt to transaction management system
                </li>
                <li>RE10 reminder to agent one day before due date</li>
                <li>RE10 received and note repairs and credits</li>
                <li>
                  Send RE10 to lender and title if there is a credit or change
                  in sale price
                </li>
                <li>Upload RE10 to transaction management system</li>
              </ul>
            </div>
            <div class="col-md-5">
              <ul>
                <li>Follow up on any outstanding addendums</li>
                <li>
                  Prelim reviewed and sent to buyer for review (2 nd set of
                  eyes)
                </li>
                <li>Appraisal received</li>
                <li>Inquire about status of repairs and receipts</li>
                <li>Check broker file for compliance</li>
                <li>Send utility info to buyer one week in advance</li>
                <li>Send funder instructions for agents and my deposit info</li>
                <li>DA received and reviewed for accuracy</li>
                <li>
                  Obtain and review settlement statement for accuracy (2 nd set
                  of eyes)
                </li>
                <li>
                  Upload final, signed buyer/seller closing statements to
                  transaction management system
                </li>
                <li>
                  Upload commission checks to transaction management system
                </li>
                <li>
                  Move property folder to closed contracts in Google Drive and
                  archive for 1 year
                </li>
                <li>Change status to closed in OTC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.modal-section-picker {
  padding: 1em;
  border-bottom: 5px rgba($secondary, 01) solid;
  text-align: center;
}
.modal-section-picker-2 {
  position: absolute;
  width: 100%;
  top: 40%;
  right: 52%;
  height: 20%;
  rotate: 90deg;
  background-color: white;
  padding: 2em;
  opacity: 0;
}

ul {
  font-size: 0.8em;
}
.hold {
  position: absolute;
  width: 50%;
  top: 40%;
  height: 20%;
  rotate: 90deg;
  transition: all 0.7s;
  left: 65%;
  background-color: rgba($light, 1);
}

.other-text {
  opacity: 0;
  transition: all 0.1s;
  transition-delay: 0.1s;
  transform: translateY(-10%);
  padding-left: 3em;
}

.holderr:hover {
  .hold {
    rotate: 0deg;
    top: 0;
    left: 12%;
    height: 100%;
    transition: all 0.7s;
    padding: 2em;
    width: 100%;
  }

  .other-text {
    opacity: 1;
    transition: all 0.7s;
    transform: translateY(0);
  }
  .modal-section-picker {
    border-bottom: 5px transparent solid;
    text-align: start;
  }
  .modal-section-picker-2 {
    border-top: 5px rgba($secondary, 01) solid;
    opacity: 1;
    left: -30%;
    width: 50%;
    text-align: center;
  }
}
</style>
