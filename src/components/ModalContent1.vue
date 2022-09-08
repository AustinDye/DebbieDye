<template>
  <div class="container">
    <div class="row">
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
    <div class="row backsplash">
      <div class="hold-2 mb-5">
        <h2 class="p-2">BUYER-CONTRACT TO CLOSE</h2>
      </div>
      <!-- <div class="buyer-cols col-md-5">
        <div class="row"> -->
      <div class="col-md-5">
        <div class="section section-1">
          <p>
            <span>1.</span>First, all documents and MLS information for the
            property are verified.
          </p>
          <p>
            <span>2.</span>A digital folder is created in Google Drive to easily
            share files.
          </p>
          <p><span>3.</span>The transaction is filed for the broker.</p>
          <p>
            <span>4.</span>All requisite documents are uploaded to the
            transaction management system.
          </p>
          <div class="arrow-line-1">
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="section section-2">
          <p>
            <span>5.</span>Introductions are made; emails go out to lenders,
            listing agents, title companies, and buyers with copies of all the
            important documents.
          </p>
          <p>
            <span>6.</span>Earnest money and receipts are requested from the
            relevant parties. This is uploaded and sent to all parties. The
            funder receives instructions for deposits.
          </p>
          <p>
            <span>7.</span>Information about utilites and preliminary buying
            agreements are sent to the buyer.
          </p>
          <div class="arrow-line-2">
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="section section-3">
          <p>
            <span>8.</span>
            The agent is reminded the day before the due date of the RE-10
            Inspection Report, and its significance to the transaction is
            considered and communicated.
          </p>
          <p>
            <span>9.</span>Repairs and credits are noted and the RE10 is sent to
            lender and title if the sale price changes.
          </p>
          <p>
            <span>10.</span>Status of repairs is checked, and compliance is
            again assessed of the parties involved.
          </p>
          <div class="arrow-line-3">
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="section section-4">
          <p>
            <span>11.</span>The settlement statement is reviewed for accuracy by
            two sets of eyes, and is signed and uploaded to the transaction
            management system.
          </p>
          <p>
            <span>12.</span>Commission checks are uploaded, the property folder
            in Drive is considered closed and is archived for 1 year.
          </p>
          <p>
            <span>13.</span>In OTC, the transaction status is changed to closed.
          </p>
        </div>
      </div>
      <div class="spacer-20"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.container {
  overflow: hidden;
}

.backsplash {
  position: relative;
  display: flex;
  padding: 2rem;
  justify-content: space-around;
  z-index: 10;
  border-left: 0.2em $secondary solid;
  border-right: 0.2em $secondary solid;
}
.backsplash::after {
  content: "";
  z-index: -2;
  position: absolute;
  background: darken($light, 5);
  top: 5%;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.hold-2 {
  z-index: 12;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  max-width: 100%;
  background-color: #fff;
  padding: 1em;
  outline: none;
  border: 0.2em black solid;
  justify-content: space-between;
  transition: ease 0.25s;
  @media (max-height: 500px) and (orientation: landscape) {
    max-width: none;
  }
  @media (orientation: portrait) and (max-width: 578px) {
    max-width: none;
  }
  box-shadow: 1em 1em 0em rgba($info, 0.6);
}

.buyer-cols {
  z-index: 12;
}

.backsplash .col-md-5 {
  display: flex;
  flex-direction: column;
  // position: relative;
}

.section {
  position: relative;
  @media (max-width: 768px) {
    position: static;
  }
  background: lighten($light, 5);
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100%;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  // border: 0.2rem black solid;
}

.section-2 {
  top: 25%;
}

.section-3 {
  top: 15%;
}
.section-4 {
  top: 35%;
}

.arrow-line-1,
.arrow-line-2,
.arrow-line-3 {
  border-top: 3px solid $secondary;
  position: absolute;
  height: 3px;
  background: none 0px 0px transparent;
  z-index: -1;
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
}

.arrow {
  position: absolute;
  display: block;
  left: 50%;
}
.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  display: block;
  height: 3px;
  width: 2rem;
  left: 50%;
  top: -3px;
  background: $secondary;
  // transform: rotate(0);
  transform-origin: 100% 100%;
}

.arrow::before {
  animation: fold-out-right 0.5s ease-in 0.5s;
}

.arrow::after {
  animation: fold-out-left 0.5s ease-in 0.5s;
}

@keyframes fold-out-right {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
}
@keyframes fold-out-left {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-45deg);
  }
}

.arrow-line-1,
.arrow-line-3 {
  top: 50%;
  right: 0;
  -webkit-animation: slideright 2s;
  -moz-animation: slideright 2s;
  -o-animation: slideright 2s;
  animation: slideright 2s;
  transform: translateX(100%) rotate(25deg) translateX(0);
  -moz-transform: translateX(100%) rotate(25deg) translateX(0);
  -webkit-transform: translateX(100%) rotate(25deg) translateX(0);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  transform-origin: 0 0;
}

.arrow-line-2 {
  top: 50%;
  -webkit-animation: slideleft 2s;
  -moz-animation: slideleft 2s;
  -o-animation: slideleft 2s;
  animation: slideleft 2s;
  -moz-transform: rotate(-245deg);
  -webkit-transform: rotate(-245deg);
  transform: rotate(-245deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  transform-origin: 0 0;
}

@keyframes slideleft {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
@keyframes slideright {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.section-1::after,
.section-2::after,
.section-3::after,
.section-4::after {
  position: absolute;
  content: "";
  background: $light;
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 8px;
}

.section-1::after {
  top: -5%;
  left: -5%;
}
.section-2::after {
  top: -5%;
  right: -5%;
}
.section-3::after {
  bottom: -5%;
  left: -5%;
}
.section-4::after {
  bottom: -5%;
  right: -5%;
}

.section span {
  margin-right: 10px;
}

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

.holderr {
  z-index: 15;
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
