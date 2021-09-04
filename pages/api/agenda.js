const agenda = async (req, res) => {
  console.log(req.params)
  res.status(200).json({ name: 'Marcio Willian' })
}

export default agenda
