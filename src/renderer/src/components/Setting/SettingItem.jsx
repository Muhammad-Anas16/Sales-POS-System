import Toggle from './Toggle'

const SettingItem = ({ icon: Icon, title, description, action, toggle, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#efeeea] rounded-lg">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-[#396662]/20 rounded-full flex items-center justify-center text-[#396662]">
          <Icon size={18} />
        </div>
        <div>
          <p className="font-semibold text-on-surface">{title}</p>
          <p className="text-xs text-[#4e4541]">{description}</p>
        </div>
      </div>

      {typeof toggle === 'boolean' ? (
        <Toggle enabled={toggle} onChange={onToggle} />
      ) : (
        action && (
          <button className="px-4 py-2 text-sm font-bold text-[#396662] hover:bg-[#396662]/10 rounded-lg transition-colors">
            {action}
          </button>
        )
      )}
    </div>
  )
}

export default SettingItem
