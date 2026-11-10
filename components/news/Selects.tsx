'use client'

type Option = { value: string; label: string }

/** <select onchange="location.href=value;"> used for the category and yearly archive pickers. */
export function NavSelect({ name, id, options, selected }: { name: string; id?: string; options: Option[]; selected?: string }) {
  return (
    <select name={name} id={id} defaultValue={selected ?? options[0]?.value} onChange={(e) => { window.location.href = e.currentTarget.value }}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
