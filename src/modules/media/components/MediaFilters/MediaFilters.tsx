interface Props {
  filters: [];
}

export default function MediaFilters({ filters }: Props) {
  return (
    <aside>
      {filters.map(({ key, label, options }) => (
        <div key={key}>
          <h4>{label}</h4>

          {options.map((option) => (
            <div key={option}>
              <label>
                <input type="checkbox" />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
