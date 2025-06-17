import './TechStack.css';

export default function TechStack() {
  const TECH_STACK = [
    'API',
    'Express.js',
    'Git',
    'GraphQL',
    'GSAP',
    'HTML/CSS',
    'Javascript',
    'Node.js',
    'PostgreSQL',
    'Python',
    'React',
    'React Native',
    'Shopify/Liquid',
    'Tailwind',
    'Typescript',
    'Webflow/Lumos',
  ];

  return (
    <section className='techstack_wrap'>
      <div className='techstack_contain u-container'>
        <div className='techstack_heading_wrap'>
          <div className='techstack_heading'>
            <h2 className='u-text-style-display-secondary'>tech</h2>
          </div>
        </div>
        <div className='techstack_info_wrap'>
          <div className='techstack_list_wrap'>
            <ul className='techstack_list'>
              {TECH_STACK.map((item, i) => {
                return (
                  <li key={i} className='techstack_list_item'>
                    <p className='u-text-style-display-primary'>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
