# frozen_string_literal: true

class TestPowerAssert < Minitest::Test
  def test_power_assert_failed
    # assert { '0'.class == '3'.to_i.times.map { |i| i + 1 }.class }
    # rubocop:disable Rails/RefuteMethods
    refute { '0'.instance_of?('3'.to_i.times.map { |i| i + 1 }.class) }
    # rubocop:enable Rails/RefuteMethods
  end
end
