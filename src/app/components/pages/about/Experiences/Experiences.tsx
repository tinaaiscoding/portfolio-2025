import './Experiences.css';

export default function Experiences() {
  return (
    <section className='exp_wrap flex flex-col items-start justify-center'>
      <div className='exp_contain u-container'>
        <div className='exp_heading'>
          <h2 className='u-text-style-display-secondary'>experience</h2>
        </div>
        <div className='exp_info'>
          <div className='exp_item_wrap grid auto-cols-fr'>
            <div className='exp_item_heading'>
              <p className='u-text-style-h4'>Pixel Technologies</p>
            </div>
            <div className='exp_item_subheading flex flex-row flex-wrap items-center justify-between'>
              <p className='u-text-style-main'>fullstack developer</p>
              <p className='u-text-style-main'>11.2023 / 03.2025</p>
            </div>
          </div>
          <div className='exp_item_wrap grid auto-cols-fr'>
            <div className='exp_item_heading'>
              <p className='u-text-style-h4'>General Assembly</p>
            </div>
            <div className='exp_item_subheading flex flex-row flex-wrap items-center justify-between'>
              <p className='u-text-style-main'>instructor associate</p>
              <p className='u-text-style-main'>03.2023 / 11.2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
