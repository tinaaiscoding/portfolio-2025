'use client';

import { useEffect, useState } from 'react';
import './styleguide.css';

type CssProp = { variable: string; value: string };

export default function Styleguide() {
  const [colors, setColors] = useState<CssProp[]>([]);
  const [fontData, setFontData] = useState({
    primaryFontFamily: '--_typography---font-family--primary',
    secondaryFontFamily: '--_typography---font-family--secondary',
    primaryWeights: [] as number[],
    secondaryWeights: [] as number[],
  });
  const [sizes, setSizes] = useState<CssProp[]>([]);
  const [spacingSizes, setSpacingSizes] = useState<CssProp[]>([]);
  const [sectionSpacing, setSectionSpacing] = useState<CssProp[]>([]);
  const [columnWidths, setColumnWidths] = useState<CssProp[]>([]);
  const [columnMarginWidths, setColumnMarginWidths] = useState<CssProp[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    const computedStyles = getComputedStyle(root);

    const getAllCustomProperties = (prefix: string) => {
      const props = Array.from(document.styleSheets)
        .flatMap((sheet) => {
          try {
            return Array.from(sheet.cssRules || []);
          } catch {
            return [];
          }
        })
        .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
        .flatMap((rule) => Array.from(rule.style))
        .filter((prop) => prop.startsWith(prefix));

      return [...new Set(props)];
    };

    const getCustomPropertyValues = (variables: string[]) =>
      variables.map((variable) => ({
        variable,
        value: computedStyles.getPropertyValue(variable).trim(),
      }));

    const getCustomPropertyNumbers = (variables: string[]) =>
      variables.map((variable) =>
        Number(computedStyles.getPropertyValue(variable).trim()),
      );

    // Colors
    const colorVars = getAllCustomProperties('--color');
    setColors(getCustomPropertyValues(colorVars));

    // Typography Weights
    const primaryWeightVars = getAllCustomProperties(
      '--_typography---font-weight--primary-',
    );
    const secondaryWeightVars = getAllCustomProperties(
      '--_typography---font-weight--secondary-',
    );

    setFontData((prev) => ({
      ...prev,
      primaryWeights: getCustomPropertyNumbers(primaryWeightVars),
      secondaryWeights: getCustomPropertyNumbers(secondaryWeightVars),
    }));

    // Size
    const sizeVars = getAllCustomProperties('--size--');
    setSizes(getCustomPropertyValues(sizeVars));

    // Spacing Size
    const spacingVars = getAllCustomProperties('--_spacing---space--');
    setSpacingSizes(getCustomPropertyValues(spacingVars));

    // Section Spacing
    const sectionSpacingVars = getAllCustomProperties(
      '--_spacing---section-space--',
    );
    setSectionSpacing(getCustomPropertyValues(sectionSpacingVars));

    // Column Widths
    const columnWidthVars = getAllCustomProperties('--column-width--');
    setColumnWidths(getCustomPropertyValues(columnWidthVars));

    // Column + Margin Widths
    const columnMarginWidthWars = getAllCustomProperties('--column-margin--');
    setColumnMarginWidths(getCustomPropertyValues(columnMarginWidthWars));
  }, []);

  return (
    <div className='u-container'>
      <div className='flex h-screen items-center justify-center'>
        <h1 className='u-text-style-display'>Style Guide</h1>
      </div>

      <section>
        <h2 className='text-h2 my-3'>Font</h2>
        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Primary</h5>

          {fontData.primaryWeights.map((weight, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
              >
                <div className='badge'>{weight}</div>
                <p
                  className='font-primary text-xl'
                  style={{ fontWeight: weight }}
                >
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            );
          })}
        </div>

        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Secondary</h5>
          {fontData.secondaryWeights.map((weight, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
              >
                <div className='badge'>{weight}</div>
                <p
                  className='font-primary text-xl'
                  style={{ fontWeight: weight }}
                >
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className='text-h2 my-3'>Color</h2>
        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Color Palette</h5>
          <div className='flex flex-wrap items-center justify-start'>
            {colors.map((color, i) => {
              return (
                <div key={i} className='flex flex-col items-center'>
                  <div
                    className='circle'
                    style={{ '--bg-color': color.value } as React.CSSProperties}
                  ></div>
                  <p>{color.variable.replace('--color--', '')}</p>
                  <p>{color.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Theme</h5>
          <div className='flex gap-4'>
            <div className='card'>
              <div className='badge'>Inherit from Body</div>
              <div className='my-8'>
                <p className='u-text-style-h2 my-2'>Heading</p>
                <p className='u-text-style-main'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id.
                </p>
              </div>
              <div className='flex gap-3'>
                <button className='btn-primary'>Button</button>
                <button className='btn-secondary'>Button</button>
              </div>
            </div>

            <div className='card u-theme-light'>
              <div className='badge'>.u-theme-light</div>
              <div className='my-8'>
                <p className='u-text-style-h2 my-2'>Heading</p>
                <p className='u-text-style-main'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id.
                </p>
              </div>
              <div className='flex gap-3'>
                <button className='btn-primary'>Button</button>
                <button className='btn-secondary'>Button</button>
              </div>
            </div>

            <div className='card u-theme-dark'>
              <div className='badge'>.u-theme-dark</div>
              <div className='my-8'>
                <p className='u-text-style-h2 my-2'>Heading</p>
                <p className='u-text-style-main'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque sem placerat in id.
                </p>
              </div>
              <div className='flex gap-3'>
                <button className='btn-primary'>Button</button>
                <button className='btn-secondary'>Button</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-h2 my-3'>Typography</h2>
        <div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-display</div>
            <p className='u-text-style-display'>Display Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h1</div>
            <p className='u-text-style-h1'>H1 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h2</div>
            <p className='u-text-style-h2'>H2 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h3</div>
            <p className='u-text-style-h3'>H3 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h4</div>
            <p className='u-text-style-h4'>H4 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h5</div>
            <p className='u-text-style-h5'>H5 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-h6</div>
            <p className='u-text-style-h6'>H6 Heading</p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-large</div>
            <p className='u-text-style-large'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-main</div>
            <p className='u-text-style-main'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
          </div>
          <div className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'>
            <div className='badge'>.u-text-style-small</div>
            <p className='u-text-style-small'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
              sapien vitae pellentesque sem placerat in id. Placerat in id
              cursus mi pretium tellus duis. Pretium tellus duis convallis
              tempus leo eu aenean.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-h2 my-3'>Size & Spacing</h2>
        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Fluid Size</h5>
          <div>
            {sizes.map((size, i) => {
              return (
                <div
                  key={i}
                  className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
                >
                  <div className='badge'>
                    fl-
                    {size.variable.replace('--size--', '').replace('rem', '')}
                  </div>
                  <div className='block' style={{ width: size.value }}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Fluid Spacing</h5>
          <div>
            {spacingSizes.map((size, i) => {
              return (
                <div
                  key={i}
                  className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
                >
                  <div className='badge'>fl-sp-{i + 1}</div>
                  <div className='block' style={{ height: size.value }}></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Section Spacing</h5>
          <div>
            {sectionSpacing.map((size, i) => {
              return (
                <div
                  key={i}
                  className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
                >
                  <div className='badge'>
                    {size.variable.replace('--_spacing---section-space--', '')}
                  </div>
                  <div className='block' style={{ height: size.value }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-h2 my-3'>Widths</h2>
        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Column</h5>
          <div>
            {columnWidths.map((size, i) => {
              return (
                <div
                  key={i}
                  className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
                >
                  <div className='badge'>width-col-{i + 1}</div>
                  <div className='block' style={{ width: size.value }}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='subdiv'>
          <h5 className='text-h5 my-3'>Column + Margin</h5>
          <div>
            {columnMarginWidths.map((size, i) => {
              return (
                <div
                  key={i}
                  className='grid grid-cols-2 border-b-1 border-gray-500 px-3 py-6'
                >
                  <div className='badge'>width-col-m-{i + 1}</div>
                  <div className='block' style={{ width: size.value }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
