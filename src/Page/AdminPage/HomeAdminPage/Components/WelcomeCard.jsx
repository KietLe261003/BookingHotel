const WelcomeCard = () => {
    return (
      <div
        className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
        style={{
          backgroundImage:
            "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
          backgroundPosition: "90% center",
        }}
      >
        <p className="text-5xl text-indigo-900">
          Welcome <br />
          <strong>Lorem Ipsum</strong>
        </p>
        <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
          <strong>01:51</strong>
        </span>
      </div>
    );
  };
  export default WelcomeCard;